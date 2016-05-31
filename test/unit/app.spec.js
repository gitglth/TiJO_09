describe('app', function () {
    'use strict';

    var answer = window.app;

    describe('calculateArea', function () {
        it('should return calculated area with success message', function () {
            expect(answer.calculateArea(3, 2, 1, 'Success', 'Error')).toEqual({ area: 1, message: 'Success'});
            expect(answer.calculateArea(8, 2, 2, 'Success', 'Error')).toEqual({ area: 4, message: 'Success'});
            expect(answer.calculateArea(3, 8, 1, 'Success', 'Error')).toEqual({ area : 5, message : 'Success'});
            expect(answer.calculateArea(1, 7, 0, 'Success', 'Error')).toEqual({ area : 7, message : 'Success'});
        });

        it('should return error message', function () {
            expect(answer.calculateArea(2, 3, 4, 'Success', 'Error')).toEqual({ area: -5, message: 'Error'});
            expect(answer.calculateArea(4, 3, 2, 'Success', 'Error')).toEqual({ area: -2, message: 'Error'});
            expect(answer.calculateArea(3, 7, 9, 'Success', 'Error')).toEqual({ area : -20, message : 'Error'});
        });

        it('should return Big null message', function () {
            expect(answer.calculateArea(4, 2, 2, 'Success', 'Error')).toEqual({ area: 0, message: 'Big null'});
        });

        it('should return false', function () {
            expect(answer.calculateArea('abc', 3, 4, 'Success', 'Error')).toEqual(false);
            expect(answer.calculateArea('a', 'b', 'c', 'Success', 'Error')).toEqual(false);
        });

    });
});
