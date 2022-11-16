export type AppRootParamList = {
    Details: { clickedSeriesTitle: string};
    Home: undefined;
    History: undefined
};

declare global {
    namespace ReactNavigation {
      interface RootParamList extends AppRootParamList {}
    }
  }