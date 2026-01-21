import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, message, consultationType, date, time } = body

    // Validate required fields
    if (!name || !email || !company || !consultationType || !date || !time) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate date is in the future
    const bookingDate = new Date(date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (bookingDate < today) {
      return NextResponse.json(
        { error: 'Booking date must be in the future' },
        { status: 400 }
      )
    }

    // Send emails if Resend is configured
    if (process.env.RESEND_API_KEY && process.env.RESEND_FROM_EMAIL && process.env.RESEND_TO_EMAIL) {
      try {
        // Send confirmation email to user
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL,
          to: email,
          subject: `Consultation Booking Confirmation - ${consultationType}`,
          html: `
            <h2>Your Consultation Has Been Booked!</h2>
            <p>Hi ${name},</p>
            <p>Thank you for booking a consultation with Zevyer. Here are your booking details:</p>
            <ul>
              <li><strong>Consultation Type:</strong> ${consultationType}</li>
              <li><strong>Date:</strong> ${new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</li>
              <li><strong>Time:</strong> ${time}</li>
              <li><strong>Company:</strong> ${company}</li>
            </ul>
            ${message ? `<p><strong>Your Message:</strong> ${message}</p>` : ''}
            <p>We look forward to speaking with you!</p>
            <hr>
            <p><small>If you need to reschedule or cancel, please contact us at ${process.env.RESEND_TO_EMAIL}</small></p>
          `,
        })

        // Send notification email to team
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL,
          to: process.env.RESEND_TO_EMAIL,
          subject: `New Consultation Booking: ${consultationType} - ${name}`,
          html: `
            <h2>New Consultation Booking</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Consultation Type:</strong> ${consultationType}</p>
            <p><strong>Date:</strong> ${new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p><strong>Time:</strong> ${time}</p>
            ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
            <hr>
            <p><small>Booked at: ${new Date().toISOString()}</small></p>
          `,
          replyTo: email,
        })
      } catch (emailError) {
        console.error('Error sending email:', emailError)
        // Continue even if email fails
      }
    }

    console.log('Booking submission:', {
      name,
      email,
      company,
      consultationType,
      date,
      time,
      message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Your consultation has been booked successfully. A confirmation email has been sent.',
        booking: {
          consultationType,
          date,
          time,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing booking:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
