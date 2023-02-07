import { firestore } from '../../firebase';
import { doc, collection, getDoc } from 'firebase/firestore';
import { redirect } from '@sveltejs/kit';

export const load = async ({ params }) => {
    const gameRef = doc(collection(firestore, 'games'), params.slug);
    const gameSnap = await getDoc(gameRef);

    if (gameSnap.exists()) {
        return {
            gameId: params.slug
        }
    } else {
        throw redirect(302, '/');
    }
}

export const prerender = false