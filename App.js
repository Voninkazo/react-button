import React from 'react';
import Button from './Button';

function App () {
        return (
            <div>
                <Button
                buttonAtr={{
                    className: "default",
                }}
                />
                <Button
                buttonAtr={{
                    className: "disabled-shadow"
                }}
                />
                <Button
                buttonAtr={{
                    className: "disabled"
                }}
                />
                <Button
                buttonAtr={{
                    className: "variant-outline",
                }}
                />
                <Button
                buttonAtr={{
                    className:"variant-text",
                }}
                />
                <Button
                    buttonAtr={{
                        className:"variant-text-disabled"
                    }}
                />
                <Button
                buttonAtr={{
                    className: ""
                }}
                />
            </div>
        )
    }

export default App;