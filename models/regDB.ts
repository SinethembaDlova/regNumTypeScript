import {Schema, model, Document} from 'mongoose';

var RegNumSchema: Schema = new Schema ({
    regNum: {
        type: String,
        unique: true,
        sparse: true,
        uppercase:true
    }
});

RegNumSchema.index({
    regNum: 1
}, {
        unique: true
    });

export default model<Document>('regDB', RegNumSchema);
