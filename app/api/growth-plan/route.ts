import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, budget, message } = body

    // Validate required fields
    if (!name || !email || !company || !budget || !message) {
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

    // Send emails if Resend is configured
    if (process.env.RESEND_API_KEY && process.env.RESEND_FROM_EMAIL && process.env.RESEND_TO_EMAIL) {
      try {
        // Send confirmation email to user
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL,
          to: email,
          subject: 'Growth Plan Request Received - Zevyer',
          html: `
            <h2>Thank You for Your Growth Plan Request!</h2>
            <p>Hi ${name},</p>
            <p>We've received your request for a tailored growth plan. Our team will review your requirements and create a comprehensive plan for ${company}.</p>
            <p><strong>Your Request Details:</strong></p>
            <ul>
              <li><strong>Company:</strong> ${company}</li>
              <li><strong>Budget:</strong> ${budget}</li>
              <li><strong>Your Message:</strong> ${message}</li>
            </ul>
            <p>We'll send your customized growth plan within 24 hours. If you have any questions in the meantime, feel free to reach out!</p>
            <p>Best regards,<br>The Zevyer Team</p>
          `,
        })

        // Send notification email to team
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL,
          to: process.env.RESEND_TO_EMAIL,
          subject: `New Growth Plan Request from ${company}`,
          html: `
            <h2>New Growth Plan Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Budget:</strong> ${budget}</p>
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

    console.log('Growth plan request:', {
      name,
      email,
      company,
      budget,
      message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! We will create your tailored growth plan and send it within 24 hours.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing growth plan request:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
