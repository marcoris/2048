export default function apiService() {
  const apiUrl = 'http://localhost:8000/highscores'

  const getHighscores = async () => {
    const response = await fetch(apiUrl, {
      method: 'GET',
    })

    if (!response.ok) {
      console.error(`Fehler beim Abrufen: ${response.statusText}`)
      return response.statusText
    }

    return response.json()
  }

  const saveNewScore = async (name: string, score: number) => {
    const response = await fetch(apiUrl, {
      method: 'POST',
      body: `{"name": "${name}", "score": ${score}}`,
    })

    if (!response.ok) {
      console.error(`Fehler beim Speichern: ${response.statusText}`)
    }
  }

  return {
    getHighscores,
    saveNewScore
  }
}