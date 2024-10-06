import React from 'react';
import Toast from 'react-native-toast-message';

export const infoToast = () => {
  Toast.show({
  type: 'info',
  text1: 'No class available',
  });
};
export const errorToast = () => {
  Toast.show({
  type: 'error',
  text1: 'Something went wrong. Try again',
  });
};

export const ToastedMessage = () => {
  
  return (
      <Toast autoHide={true}
      visibilityTime={1500} 
      position='top'
      topOffset={45}
      />
  )
}