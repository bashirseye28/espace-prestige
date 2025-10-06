import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const data = await req.formData()

  const name = data.get('name') as string
  const email = data.get('email') as string
  const phone = data.get('phone') as string
  const project = data.get('project') as string
  const budget = data.get('budget') as string
  const message = data.get('message') as string
  const file = data.get('file') as File | null

  const fileBuffer = file ? Buffer.from(await file.arrayBuffer()) : null

  const transporter = nodemailer.createTransport({
    host: process.env.ZEMAIL_HOST,
    port: parseInt(process.env.ZEMAIL_PORT || '465'),
    secure: process.env.ZEMAIL_SECURE === 'true',
    auth: {
      user: process.env.ZEMAIL_USER,
      pass: process.env.ZEMAIL_PASS,
    },
  })

  const html = `
    <p><strong>Nom :</strong> ${name}</p>
    <p><strong>Email :</strong> ${email}</p>
    <p><strong>Téléphone :</strong> ${phone}</p>
    <p><strong>Type de projet :</strong> ${project}</p>
    <p><strong>Message :</strong><br/>${message}</p>
  `

  const confirmationHtml = `
    <div style="font-family: Inter, sans-serif; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; max-width: 600px; margin: auto;">
      <div style="text-align: center; margin-bottom: 24px;">
        <img src="https://res.cloudinary.com/dnmoy5wua/image/upload/v1759700891/NEWEspace_Prestige_pth0mv.png" alt="Espace Prestige Logo" style="max-height: 60px;" />
      </div>
      <h2 style="color: #5F2C91; font-family: Poppins, sans-serif; font-size: 20px; text-align: center; margin-bottom: 16px;">
        Demande de devis reçue
      </h2>
      <p style="text-align: center;">Merci pour votre demande. Nous vous répondrons dans les plus brefs délais.</p>
      <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />
      <p style="margin: 0;"><strong>Amina</strong><br />Fondatrice & Designer principale<br />Espace Prestige</p>
      <p style="margin: 0; color: #5F2C91;">contact@espaceprestigesenegal.com</p>
    </div>
  `

  try {
    // Mail à vous
    await transporter.sendMail({
      from: `"Espace Prestige" <${process.env.ZEMAIL_USER}>`,
      to: process.env.ZEMAIL_TO,
      subject: `Nouvelle demande de devis : ${project}`,
      html,
      attachments: fileBuffer
        ? [
            {
              filename: file.name,
              content: fileBuffer,
            },
          ]
        : [],
    })

    // Mail à l'utilisateur
    await transporter.sendMail({
      from: `"Espace Prestige" <${process.env.ZEMAIL_USER}>`,
      to: email,
      subject: 'Confirmation de votre demande de devis',
      html: confirmationHtml,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Erreur lors de l’envoi du mail', err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}