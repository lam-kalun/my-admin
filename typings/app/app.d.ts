declare namespace App {
  type test = string

  type LayoutMode = 'aside' | 'top' | 'top-aside'
  interface LayoutConfig {
    asideWidth: number
    headerHeight: number
    footerHeight: number
    tabHeight: number
    gap: number
    asideCollapse: boolean
    asideCollapseWidth: number
    showTabs: boolean
    showBreadcrumb: boolean
    showFooter: boolean
  }

  interface BaseLayoutConfig extends Omit<LayoutConfig, 'asideCollapse' | 'asideCollapseWidth'> {
    layoutMode: LayoutMode
  }

  interface BaseConfig {
    layout: BaseLayoutConfig
    theme: {
      primaryColor: string
    }
  }
}