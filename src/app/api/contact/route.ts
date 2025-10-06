import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json()

  const transporter = nodemailer.createTransport({
    host: process.env.ZEMAIL_HOST,
    port: parseInt(process.env.ZEMAIL_PORT || '465'),
    secure: process.env.ZEMAIL_SECURE === 'true',
    auth: {
      user: process.env.ZEMAIL_USER,
      pass: process.env.ZEMAIL_PASS,
    },
  })

  const htmlMessage = `
    <div style="font-family: Inter, sans-serif; font-size: 14px; color: #222;">
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Sujet :</strong> ${subject}</p>
      <p><strong>Message :</strong><br />${message}</p>
    </div>
  `

  const userReplyHtml = `
    <div style="font-family: Inter, sans-serif; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; max-width: 600px; margin: auto;">
      <div style="text-align: center; margin-bottom: 24px;">
        <img src="https://res.cloudinary.com/dnmoy5wua/image/upload/v1759700891/NEWEspace_Prestige_pth0mv.png" alt="Espace Prestige Logo" style="max-height: 60px;" />
      </div>

      <h2 style="color: #5F2C91; font-family: Poppins, sans-serif; font-size: 20px; text-align: center; margin-bottom: 16px;">
        Merci pour votre message
      </h2>

      <p style="text-align: center; font-size: 15px; line-height: 1.6;">
        Nous avons bien reçu votre demande. Notre équipe vous répondra dans les plus brefs délais.
      </p>

      <hr style="margin: 32px 0; border-top: 1px solid #e5e7eb;" />

      <div style="font-size: 14px; color: #222;">
        <p style="margin: 0 0 6px;">Cordialement,</p>
        <p style="font-weight: 600; margin: 0;">Amina</p>
        <p style="margin: 0;">Fondatrice & Designer principale</p>
        <p style="margin: 0 0 16px;">Espace Prestige — Architecture & Design Studio</p>

        <div style="margin-top: 12px;">
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <img src="https://www.svgrepo.com/show/501879/location-pin.svg" width="16" style="margin-right: 8px;" />
            <span>Dakar, Sénégal</span>
          </div>
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <img src="https://www.svgrepo.com/show/501892/mail.svg" width="16" style="margin-right: 8px;" />
            <a href="mailto:contact@espaceprestigesenegal.com" style="color: #5F2C91; text-decoration: none;">contact@espaceprestigesenegal.com</a>
          </div>
          <div style="display: flex; align-items: center;">
            <img src="https://www.svgrepo.com/show/473768/globe.svg" width="16" style="margin-right: 8px;" />
            <a href="https://www.espaceprestigesenegal.com" style="color: #5F2C91; text-decoration: none;">www.espaceprestigesenegal.com</a>
          </div>
        </div>
      </div>
    </div>
  `

  try {
    await transporter.sendMail({
      from: `"Espace Prestige" <${process.env.ZEMAIL_USER}>`,
      to: process.env.ZEMAIL_TO,
      subject: `Nouveau message depuis le site : ${subject}`,
      html: htmlMessage,
    })

    await transporter.sendMail({
      from: `"Espace Prestige" <${process.env.ZEMAIL_USER}>`,
      to: email,
      subject: `Confirmation de votre message — Espace Prestige`,
      html: userReplyHtml,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erreur envoi mail :', error)
    return NextResponse.json({ error: 'Erreur lors de l’envoi de l’e-mail' }, { status: 500 })
  }
}