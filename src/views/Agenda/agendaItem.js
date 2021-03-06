import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  SIZE_X_LARGE,
  SIZE_LARGE,
} from '../../styles/styles';
import {getSize} from '../../utils/utils';

export const AgendaItem = ({atividade, horario, backgroundColor, color}) => {
  const {height} = useWindowDimensions();
  const size = getSize(height);
  const styles = getStyles(backgroundColor, color, size);

  return (
    <View style={styles.containerItem}>
      <View style={styles.containerHorario}>
        <Text style={styles.horario}>{horario}</Text>
        <Text style={styles.horas}>horas</Text>
      </View>
      <Text style={styles.atividade}>{atividade}</Text>
    </View>
  );
};

const getHeight = (size) => {
  switch (size) {
    case 'small':
    case 'medium':
      return hp('11%');
    case 'large':
    case 'xlarge':
    case 'xxlarge':
      return hp('10%');
    case 'xxxlarge':
      return hp('10%');
    default:
      break;
  }
};

const getStyles = (backgroundColor, color, size) => {
  return StyleSheet.create({
    containerItem: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: size === 'small' ? wp('90%') : wp('80%'),
      height: getHeight(size),
      marginBottom: 10,
      backgroundColor,
      shadowOffset: {
        width: 0.2,
        height: 0.2,
      },
      shadowOpacity: 0.2,
      elevation: 1,
    },
    containerHorario: {
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: SIZE_LARGE,
      width: 44,
    },
    horario: {
      color,
      fontSize: 30,
      fontFamily: FONT_FAMILY_BOLD,
    },
    horas: {
      color,
      fontSize: 16,
      fontFamily: FONT_FAMILY_REGULAR,
    },
    atividade: {
      color,
      fontSize: 14,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      textAlign: 'left',
      fontFamily: FONT_FAMILY_BOLD,
      marginRight: SIZE_X_LARGE,
    },
  });
};
