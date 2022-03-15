import React from 'react';
import { View, ScrollView } from 'react-native';

const ResetPassword = () => {
    const [Confirm, setConfirm] = React.useState(false);
    return (
        <ScrollView>
            {
                Confirm ?
                    (
                        <ConfirmMessage />
                    ) : (
                        <GetInstruction />
                    )
            }
        </ScrollView>
    );
};

export default ResetPassword;

const GetInstruction = () => {
    return (
        <View>

        </View>
    )
}
const ConfirmMessage = () => {
    return (
        <View>

        </View>
    )
}