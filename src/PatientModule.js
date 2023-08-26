import React from 'react'
import axios from 'axios'
function PatientModule() {
    const handleClick = async () => {
        const clientId = '23RDFT';
        const redirectUri = 'http://localhost:3000'; // Scopes you want to request access to

        // const authorizationUrl = `https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=23RDFT&scope=activity+cardio_fitness+electrocardiogram+heartrate+location+nutrition+oxygen_saturation+profile+respiratory_rate+settings+sleep+social+temperature+weight&code_challenge=Q9Vewmo7z6N_7I2Wa-llJq3lFjH-3chmNwcfGtsULAw&code_challenge_method=S256&state=584k4c3m103s6h704w4m3s232n0o0w3k`;
        const authCode = await axios.post('https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=23RDFT&scope=activity+cardio_fitness+electrocardiogram+heartrate+location+nutrition+oxygen_saturation+profile+respiratory_rate+settings+sleep+social+temperature+weight&code_challenge=Q9Vewmo7z6N_7I2Wa-llJq3lFjH-3chmNwcfGtsULAw&code_challenge_method=S256&state=584k4c3m103s6h704w4m3s232n0o0w3k')
        console.log(authCode.callBackUrl)
        const exchangeCodeForToken = async (authorizationCode, redirectUri, clientId, clientSecret) => {
            try {
                const response = await axios.post('https://api.fitbit.com/oauth2/token', null, {
                    params: {
                        code: "a5575e1f25fb64e955a34ab45f3a6f3c3e41e1d",
                        redirect_uri: "http://localhost:3000",
                        client_id: "23RDFT",
                        client_secret: "7c300c46c4bbb99fe424d57026cac6b1",
                        grant_type: 'authorization_code'
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });

                return response.data.access_token;
            } catch (error) {
                console.error('Error exchanging code for token:', error);
                return null;
            }
            console.log(exchangeCodeForToken)
        };
    }
    return (
        <div>
            <button onClick={handleClick}>Share Fitbit data </button>
        </div>
    )
}

export default PatientModule
