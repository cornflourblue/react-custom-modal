import React from 'react';

import { JwModal } from '../_components';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bodyText: 'This text can be updated in modal 1'
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        const { bodyText } = this.state;
        return (
            <div>
                <h1>Home</h1>
                <p>{bodyText}</p>
                <button onClick={JwModal.open('custom-modal-1')}>Open Modal 1</button>
                <button onClick={JwModal.open('custom-modal-2')}>Open Modal 2</button>

                <JwModal id="custom-modal-1">
                    <h1>A Custom Modal!</h1>
                    <p>
                        Home page text: <input type="text" name="bodyText" value={bodyText} onChange={this.handleChange} />
                    </p>
                    <button onClick={JwModal.close('custom-modal-1')}>Close</button>
                </JwModal>

                <JwModal id="custom-modal-2">
                    <h1 style={{height: 1000}}>A Tall Custom Modal!</h1>
                    <button onClick={JwModal.close('custom-modal-2')}>Close</button>
                </JwModal>
            </div>
        );
    }
}

export { HomePage }; 