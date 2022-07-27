/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: 'Filipe' },
        { id: 2, name: 'Thaynna' },
        { id: 3, name: 'Popolepok' },
    ]

    return response.json(users);
}