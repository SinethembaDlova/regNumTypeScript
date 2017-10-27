import * as bodyParser from 'body-parser';
import {Router, Request, Response, NextFunction} from 'express';
import regDB from '../models/regDB'
import * as session from 'express-session';

export class HomeRoute {

    constructor() { }

    //get route
    public getRegNum(req: Request, res: Response): void {
        regDB.find({})
        .then((allPlates) => {
          res.render('registration_number', {
              regPlate: allPlates
          })
        })
        .catch(error =>(console.log(error)));
    }//end get homeRoute method

    //post route
    public createRegNum(req:Request, res:Response):void {

    var enteredRegNum = req.body.takeReg;

    var regPlates = new regDB({
            regNum: enteredRegNum
        });

    regPlates.save()
    .then((plate) => {
      //req.session.flash = "registration successfully added.";
      res.redirect('/');
    })
    .catch(error => (console.log(error)));
  }
}
