import { NextRequest, NextResponse } from 'next/server'

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

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification to team
    // 3. Add to CRM/lead management system
    // 4. Trigger automated workflow

    console.log('Growth plan request:', {
      name,
      email,
      company,
      budget,
      message,
      timestamp: new Date().toISOString(),
    })

    // In production, you would:
    // - Save to database
    // - Send notifications
    // - Add to CRM
    // - Trigger automated responses

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
