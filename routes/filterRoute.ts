import * as bodyParser from 'body-parser';
import {Router, Request, Response, NextFunction} from 'express';
import regDB from '../models/regDB';

export class FilterRoute {

    constructor() { };

    public filter(req: Request, res: Response): void {
        var selectedCity = req.body.filter;

        console.log('**********');
        console.log(selectedCity);

        regDB.find({ regNum: { $regex: selectedCity } })
            .then((searchResults) => {
                res.render('registration_number', {
                    regPlate: searchResults
                })
            })
            .catch(error => console.log(error));
    }
}
