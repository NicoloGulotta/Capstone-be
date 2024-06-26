import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
    serviceType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    },
    date: {
        type: Date,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    notes: String, // Note opzionali dell'utente
    status: {
        type: String,
        enum: ['Confermato', 'Annullato', 'In attesa'],
        default: 'In attesa'
    }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
