import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../../components/defaults/Container";
import AddProduct from "../../components/products/AddProduct";
import ProductsOverview from "../../components/products/ProductsOverview";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const AllProducts = () => {
  const [activeTab, setActiveTab] = useState<string>("productOverview");
  return (
    <Container active="Products">
      {activeTab === "addProduct" ? (
        <motion.div
          key={activeTab}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.3 }}
        >
          <AddProduct setActiveTab={setActiveTab} />
        </motion.div>
      ) : (
        <motion.div
          key={activeTab}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.3 }}
        >
          <ProductsOverview setActiveTab={setActiveTab} />
        </motion.div>
      )}
    </Container>
  );
};

export default AllProducts;
