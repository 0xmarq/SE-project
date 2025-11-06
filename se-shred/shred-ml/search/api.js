// api/search.js (or Express route)
import express from 'express'
import fetch from 'node-fetch'

const router = express.Router()

router.post('/search', async (req, res) => {
  const { query } = req.body

  // guardrails: only fitness queries
  const systemPrompt = `
  You are SHRED's AI fitness assistant.
  You ONLY answer questions related to workouts, exercise form, fitness routines, or gym advice.
  If the question is unrelated to exercise, politely refuse.
  Format answers as concise bullet points.
  `

  try {
    const geminiRes = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBGGTicQ9hfD29ARwmr5I7wBpyMYPuor4s', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          { role: 'user', parts: [{ text: `${systemPrompt}\n\nUser: ${query}` }] },
        ],
      }),
    })

    const data = await geminiRes.json()
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No relevant results.'

    res.json({ results: text })
  } catch (err) {
    console.error('Gemini search failed:', err)
    res.status(500).json({ error: 'AI search failed.' })
  }
})

export default router
