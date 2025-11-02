import { SafeAreaView } from 'react-native-safe-area-context';

const CustomSafeAreaView = (props: any) => {
  return (
    <SafeAreaView className="flex-1 pb-6" edges={['top', 'left', 'right']}>
      {props.children}
    </SafeAreaView>
  );
};

export default CustomSafeAreaView;
