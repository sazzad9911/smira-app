import React from 'react';
import { View, Modal } from 'react-native';

const SignUp = () => {
    const [modalVisible, setModalVisible] = React.useState(false);

    return (
        <View>





            {
                //implement your design over this content
            }
            <Modal animationType="fade"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}>
                <View>
                    <SignUpWithOtp/>
                </View>
            </Modal>
        </View>
    );
};

export default SignUp;
const SignUpWithOtp = () => {
    return (
        <View>
            {
                //next page design will be here 
            }
        </View>
    )
}