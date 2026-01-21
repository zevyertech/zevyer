import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, subject, message } = body

    // Validate required fields
    if (!name || !email || !company || !message) {
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

    // Send email notification if Resend is configured
    if (process.env.RESEND_API_KEY && process.env.RESEND_FROM_EMAIL && process.env.RESEND_TO_EMAIL) {
      try {
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL,
          to: process.env.RESEND_TO_EMAIL,
          subject: subject || `New Contact Form Submission from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>Submitted at: ${new Date().toISOString()}</small></p>
          `,
          replyTo: email,
        })
      } catch (emailError) {
        console.error('Error sending email:', emailError)
        // Continue even if email fails
      }
    }

    console.log('Contact form submission:', {
      name,
      email,
      company,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received. We will get back to you soon.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
