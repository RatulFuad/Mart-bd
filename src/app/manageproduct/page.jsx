import React from 'react';
import ProtectedPage from "@/components/ProtectedPage";

const page = () => {
    return (
      <ProtectedPage>
        <div>manage product</div>
      </ProtectedPage>
    );
};

export default page;