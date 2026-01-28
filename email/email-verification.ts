export function getVerificationEmailHtml(
  email: string,
  verificationUrl: string,
): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Reset Your Password</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f5;">
     <!-- Header --> 
     <tr> 
      <td style="background:#111827; padding:24px; text-align:center;"> <h1 style="color:#ffffff; margin:0; font-size:22px;"> Conferma il tuo indirizzo email </h1> </td> </tr> 
      <!-- Body --> 
      <tr> 
      <td style="padding:32px; color:#374151; font-size:16px; line-height:1.5;"> 
      <p style="margin-top:0;"> Ciao 👋, </p> <p> grazie per esserti registrato! Per completare l’attivazione del tuo account, conferma il tuo indirizzo email cliccando sul pulsante qui sotto. </p> <div style="text-align:center; margin:32px 0;"> <a href="${verificationUrl}" style="background:#2563eb; color:#ffffff; text-decoration:none; padding:14px 28px; border-radius:6px; font-weight:bold; display:inline-block;"> Verifica email </a> </div> <p> Se non hai creato tu un account, puoi ignorare tranquillamente questa email. </p> <p style="font-size:14px; color:#6b7280;"> Questo link scadrà automaticamente per motivi di sicurezza. </p> <p style="margin-bottom:0;"> A presto,<br/> <strong>Antonio Moccia</strong> </p> </td> </tr> <!-- Footer --> <tr> <td style="background:#f9fafb; padding:20px; text-align:center; font-size:12px; color:#9ca3af;"> © 2026 Brokless · Tutti i diritti riservati </td> </tr> </table> </td>
    </body>
    </html>
  `.trim();
}
