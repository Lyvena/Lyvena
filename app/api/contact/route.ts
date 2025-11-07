import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, projectIdea, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400 }
      )
    }

    // Create transporter using Gmail SMTP
    // Note: You need to set up environment variables for email credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Project Idea:</strong> ${projectIdea || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `

    // Send email to info@lyvena.xyz
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'info@lyvena.xyz',
      subject: `New Contact Form Submission from ${name}`,
      html: emailContent,
      replyTo: email,
    })

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to send email' }),
      { status: 500 }
    )
  }
}
