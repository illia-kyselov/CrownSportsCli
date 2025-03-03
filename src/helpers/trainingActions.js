import { Platform, ActionSheetIOS, Alert } from 'react-native';
import { store } from '../store/store';
import { removeTraining } from '../store/slices/trainingSlice';

export const handleEditPress = (item, callback, navigation) => {
    if (Platform.OS === 'ios') {
        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: ['Cancel', 'Edit', 'Delete'],
                destructiveButtonIndex: 2,
                cancelButtonIndex: 0,
            },
            (buttonIndex) => {
                if (buttonIndex === 1) {
                    navigation.navigate('AddTraining', { training: item, editMode: true });
                } else if (buttonIndex === 2) {
                    Alert.alert(
                        'Delete training',
                        'Are you sure you want to delete a training?',
                        [
                            { text: 'Cancel', style: 'cancel' },
                            {
                                text: 'Delete',
                                style: 'destructive',
                                onPress: async () => {
                                    await store.dispatch(removeTraining(item.id));
                                    if (callback) { callback(); }
                                },
                            },
                        ]
                    );
                }
            }
        );
    } else {
        Alert.alert(
            'Actions',
            'Choose an action',
            [
                {
                    text: 'Edit',
                    onPress: () => {
                        navigation.navigate('AddTraining', { training: item, editMode: true });
                    },
                },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => {
                        Alert.alert(
                            'Delete training',
                            'Are you sure you want to delete a training?',
                            [
                                { text: 'Cancel', style: 'cancel' },
                                {
                                    text: 'Delete',
                                    style: 'destructive',
                                    onPress: async () => {
                                        await store.dispatch(removeTraining(item.id));
                                        if (callback) { callback(); }
                                    },
                                },
                            ]
                        );
                    },
                },
                { text: 'Cancel', style: 'cancel' },
            ],
            { cancelable: true }
        );
    }
};
