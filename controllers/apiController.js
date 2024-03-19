const CardStatus = require('../models/schema');

const getCardStatus = async (req, res) => {
    const { phone, card_id } = req.query;

    if (!phone && !card_id) {
        return res.status(400).json({ error: 'Please enter either the phone number or the card ID to proceed.' });
    }

    let query = {};
    if (phone) {
        query = { user_contact: phone };
    } else {
        query = { card_id: card_id };
    }

    try {
        const entries = await CardStatus.find(query).select('comment source_file').exec();
        if (entries.length === 0) {
            return res.status(404).json({ error: 'No entry found for the query.' });
        }
       
        const updatedEntries = entries.map(entry => ({
            ...entry._doc,
            comment: entry.comment === 'Comment not available' ? 'status not available...' : entry.comment
        }));
        res.json({ entries: updatedEntries });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server Issue' });
    }
};

module.exports = { getCardStatus };
