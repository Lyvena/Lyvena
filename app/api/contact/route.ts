import nodemailer from 'nodemailer'

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')

export async function POST(request: Request) {
  try {
    const { name, email, organization, projectIdea, message } = await request.json()
    const trimmedName = String(name || '').trim()
    const trimmedEmail = String(email || '').trim()
    const trimmedOrganization = String(organization || '').trim()
    const trimmedProjectIdea = String(projectIdea || '').trim()
    const trimmedMessage = String(message || '').trim()

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400 }
      )
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      return new Response(
        JSON.stringify({ error: 'Email service is not configured' }),
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(trimmedName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(trimmedEmail)}</p>
      <p><strong>Organization:</strong> ${escapeHtml(trimmedOrganization || 'Not provided')}</p>
      <p><strong>Project Idea:</strong> ${escapeHtml(trimmedProjectIdea || 'Not provided')}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(trimmedMessage).replace(/\n/g, '<br>')}</p>
    `

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'info@lyvena.xyz',
      subject: `New Lyvena inquiry from ${trimmedName}`,
      html: emailContent,
      replyTo: trimmedEmail,
      text: [
        'New Contact Form Submission',
        `Name: ${trimmedName}`,
        `Email: ${trimmedEmail}`,
        `Organization: ${trimmedOrganization || 'Not provided'}`,
        `Project Idea: ${trimmedProjectIdea || 'Not provided'}`,
        '',
        trimmedMessage,
      ].join('\n'),
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
