import { NextRequest, NextResponse } from 'next/server'

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

    // Here you would typically:
    // 1. Save to database
    // 2. Send confirmation email to user
    // 3. Send notification email to team
    // 4. Add to calendar system (Google Calendar, Calendly, etc.)
    // 5. Check for conflicts

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

    // In production, you would:
    // - Save to database
    // - Send confirmation emails
    // - Integrate with calendar system
    // - Check availability

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
