import { useEffect, useState } from "react";
import styled from "styled-components";

import { VideoItem } from "../common/interface/Video";
import { getSubscriptionsList } from "../common/api/youtube";

import SubscriptionList from "../components/app/subscriptions/SubscriptionList";

const Subscriptions = () => {
  const [subscriptions, setSubscriptions] = useState<VideoItem[] | null>(null);

  const fetchSubscriptionsVideo = async () => {
    const res = await getSubscriptionsList();

    setSubscriptions(res);
  };

  useEffect(() => {
    fetchSubscriptionsVideo();
  }, []);

  return (
    <RootStyle>
      {subscriptions && <SubscriptionList data={subscriptions} />}
    </RootStyle>
  );
};

const RootStyle = styled.div`
  margin: 0 16px;
`;

export default Subscriptions;
