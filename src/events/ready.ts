import { QuoterClient } from '../struct/classes/Client';

export default {
    name: 'ready',
    execute(client : QuoterClient) {
        console.log('Ready !');
    }
}