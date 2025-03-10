export default async function handler(req, res) {
    const { latitude, longitude } = req.query;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: `Gagal mengambil data cuaca: ${error}` });
    }
}
