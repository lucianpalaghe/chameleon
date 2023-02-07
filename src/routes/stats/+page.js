import { firestore } from '../../firebase';
import { collection, } from 'firebase/firestore';
import { query, where, getCountFromServer } from 'firebase/firestore';

export const load = async ({ params }) => {
    const coll = collection(firestore, 'games');
    let q = query(coll, where('finished', '==', false));
    let snapshot = await getCountFromServer(q);
    let gamesOngoing = snapshot.data().count;

    q = query(coll, where('finished', '==', true));
    snapshot = await getCountFromServer(q);
    let gamesFinished = snapshot.data().count;

    return {
        gamesOngoing: gamesOngoing,
        gamesFinished: gamesFinished
    }
}

export const prerender = true