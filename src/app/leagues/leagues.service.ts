import { Injectable } from '@angular/core';

import { League } from './league';
import { LEAGUES } from '../../assets/mock-leagues';

@Injectable()
export class LeagueService {
    getActiveLeagues(): Promise<League[]> {
        return Promise.resolve(LEAGUES);
    }
}