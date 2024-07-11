import { render } from '@testing-library/react';
import TestBox from '../Components/TestBox';

describe('TestBox component', () => {
    
    test('La caja de texto se encuentra en el documento', () => {
        const { getByText } = render( < TestBox /> );
    });

})