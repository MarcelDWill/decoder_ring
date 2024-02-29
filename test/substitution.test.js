// Write your tests here!
const { substitution } = substitutionModule;

describe('Substitution cipher tests', () => {
    it('Returns false if the given alphabet isn\'t exactly 26 characters long', () => {
        expect(substitution('message', 'abcdef')).toEqual(false);
        expect(substitution('message', 'abcdefghijklmnopqrstuvwxyz_')).toEqual(false);
        expect(substitution('message', '')).toEqual(false);
        expect(substitution('message')).toEqual(false);
    });

    it('Correctly translates the given phrase based on the alphabet given to the function', () => {
        expect(substitution('message', 'zyxwvutsrqponmlkjihgfedcba')).toEqual('nvhhzrh');
        expect(substitution('a message', 'zyxwvutsrqponmlkjihgfedcba')).toEqual('z nvhhzrh');
        expect(substitution('a message', 'bcdefghijklmnopqrstuvwxyza')).toEqual('b nfthdrf');
    });

    it('Returns false if there are any duplicate characters in the given alphabet', () => {
        expect(substitution('message', 'abcdeabcdeabcdeabcdeabcdexy')).toEqual(false);
        expect(substitution('message', 'abcdefgAijklmnopqrstuvwxyz')).toEqual(false);
    });

    it('Maintains spaces in the message, before and after encoding or decoding', () => {
        expect(substitution('a message', 'zyxwvutsrqponmlkjihgfedcba')).toEqual('z nvhhzrh');
        expect(substitution('a message', 'bcdefghijklmnopqrstuvwxyza')).toEqual('b nfthdrf');
    });

    it('Ignores capital letters', () => {
        expect(substitution('A Message', 'zyxwvutsrqponmlkjihgfedcba')).toEqual('z nvhhzrh');
        expect(substitution('A Message', 'BCDEFGHIJKLMNOPQRSTUVWXYZA')).toEqual('b nfthdrf');
    });
});