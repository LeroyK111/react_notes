import { Refine } from "@refinedev/core";
import routerProvider, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/nextjs-router";
import type { NextPage } from "next";
import { AppProps } from "next/app";
import { Layout } from "@components/layout";
import dataProvider from "@refinedev/simple-rest";
import "@styles/global.scss";
import { appWithTranslation, useTranslation } from "next-i18next";



const API_URL = "https://api.fake-rest.refine.dev";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  noLayout?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const renderComponent = () => {
    if (Component.noLayout) {
      return <Component {...pageProps} />;
    }
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  };

  const { t, i18n } = useTranslation();

  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <div>
      <Refine
        routerProvider={routerProvider}
        dataProvider={dataProvider(API_URL)}
        i18nProvider={i18nProvider}
        resources={[{
          name: "",
          
        }]}
        options={{
          syncWithLocation: true,
          warnWhenUnsavedChanges: true,
          useNewQueryKeys: true,
          projectId: "j0uofJ-bfGyHe-JHDp9a",
        }}
      >
        {/* 展示渲染的组件 */}
        {renderComponent()}
        {/* 用户为保存的情况下是否提示 */}
        <UnsavedChangesNotifier/>
        <DocumentTitleHandler />
      </Refine>
    </div>
  );
}

export default appWithTranslation(MyApp);
