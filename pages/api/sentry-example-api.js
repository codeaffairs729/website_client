export default function handler(_req, res) {
  throw new Error('Sentry Example API Route Error')
  res.status(200).json({ name: 'John Doe' })
}
