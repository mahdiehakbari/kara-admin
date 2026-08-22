'use client';

import { Button } from "@/shareComponent";
import { ITabsComponentProps } from "../MainPage/types";
import DashboardActiveTabs from "../MainPagepanel/ActiveTabs";
import SettlementActiveTabs from "../Settlement/SettlementActiveTabs";
import InstallmentActiveTabs from '../Installment/InstallmentActiveTabs';

const TabsComponent = ({
  activeTab,
  setActiveTab,
  name,
  activeTabItem,
  activeTabFinancial,
}: ITabsComponentProps) => {
  return (
    <div className='px-0 md:px-6'>
      <div className='mt-6 flex flex-wrap gap-2 px-4 md:px-0'>
        {activeTabItem.map((item) => (
          <Button
            key={item.id}
            variant={activeTab === item.active ? 'primary' : 'outline'}
            onClick={() => setActiveTab(item.active)}
            className='px-4 py-1.5 rounded-lg text-sm font-medium transition-all w-35 border-(--primary)'
          >
            {item.title}
          </Button>
        ))}
      </div>
      {name == 'dashboard' && <DashboardActiveTabs activeTab={activeTab} />}
      {name == 'settlement' && (
        <SettlementActiveTabs
          activeTab={activeTab}
          activeTabFinancial={activeTabFinancial}
        />
      )}
      {name == 'installment' && <InstallmentActiveTabs activeTab={activeTab} />}
    </div>
  );
};
 
export default TabsComponent;