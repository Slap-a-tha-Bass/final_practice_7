import * as jwt from 'jsonwebtoken';
import { ReqUsers } from '../../../types';
import { jwtConfig } from '../config';

export const createToken = async (req: ReqUsers, res: any) => {
    const token = jwt.sign({ userid: req.user.id, email: req.user.email, role: 'guest'},
            jwtConfig.secret,
            {expiresIn: jwtConfig.expires});
            res.json(token);
            return;
}