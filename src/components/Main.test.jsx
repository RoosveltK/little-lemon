import { initializeTimes, updateTimes } from './Main';
import { fetchAPI } from '../api';
import { describe, test, expect, vi } from 'vitest';

vi.mock('../api', () => ({
    fetchAPI: vi.fn(() => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])
}));

describe('Main component reducer functions', () => {
    test('initializeTimes returns the expected initial times', () => {
        const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
        const initialState = initializeTimes();
        expect(initialState).toEqual(expectedTimes);
        expect(fetchAPI).toHaveBeenCalled();
    });

    test('updateTimes returns the same value that is provided in the state if action is unknown', () => {
        const initialState = ['17:00', '18:00'];
        const action = { type: 'UNKNOWN' };
        const newState = updateTimes(initialState, action);
        expect(newState).toEqual(initialState);
    });

    test('updateTimes returns the updated times when UPDATE_TIMES action is dispatched', () => {
        const initialState = ['17:00', '18:00'];
        const action = { type: 'UPDATE_TIMES', date: '2026-02-14' };
        const newState = updateTimes(initialState, action);

        // Since we mocked fetchAPI to return the full list
        const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
        expect(newState).toEqual(expectedTimes);
        expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));
    });
});
