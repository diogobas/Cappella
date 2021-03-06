import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import {ContainerPage} from '../../components/ContainerPage';
import {getSize} from '../../utils/utils';
import {ComunidadeItem} from './comunidadeItem';
import {COMUNIDADE} from './data/Comunidade';

export const Comunidade = ({imagem}) => {
  const {height} = useWindowDimensions();
  const styles = getStyles(getSize(height));

  return (
    <ContainerPage imagem={imagem} titulo={'Nossa Comunidade'}>
      <FlatList
        style={styles.flatList}
        numColumns={1}
        data={COMUNIDADE}
        renderItem={({item}) => <ComunidadeItem {...item} />}
        keyExtractor={(item) => item.media}
      />
    </ContainerPage>
  );
};

const getStyles = (size) => {
  return StyleSheet.create({
    flatList: {
      marginTop: size === 'small' ? 20 : 100,
    },
  });
};
