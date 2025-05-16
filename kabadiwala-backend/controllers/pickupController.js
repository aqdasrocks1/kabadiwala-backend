exports.requestPickup = (req, res) => {
  const { name, address, contact, scrapType, quantity } = req.body;
  console.log(`Pickup requested by ${name} for ${scrapType} (${quantity}) at ${address}`);
  // Future: Save to DB, send SMS/email notifications
  res.status(200).json({ message: 'Pickup request received' });
};