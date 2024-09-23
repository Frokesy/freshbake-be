import {
    Html,
    Head,
    Preview,
    Body,
    Container,
    Heading,
    Section,
    Text,
    Link,
    Hr,
  } from "@react-email/components";
  import { FC } from "react";
import { UserDataProps } from "../../App";

export interface CartItemProps {
    id: number;
    type: string;
    category: string;
    tag: string;
    img: string;
    weight: string;
    price: string;
    deliveryDay: string;
    deliveryTime: string;
    quantity: number;
    totalCost: number;
  }
  
  interface OrderStatusTemplateProps {
    userData: UserDataProps | undefined;
    cartItems: CartItemProps[] | undefined;
    orderId: number;
    orderStatus: string;
    expectedDeliveryDate: string | undefined;
    activeTab: string | undefined;
  }
  
  export const OrderStatusChange: FC<OrderStatusTemplateProps> = ({
    userData,
    cartItems,
    orderId,
    orderStatus,
    expectedDeliveryDate,
    activeTab,
  }) => {
    return (
      <Html>
        <Head />
        <Preview>Your FreshBake order status has been updated!</Preview>
        <Body style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
          <Container
            style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}
          >
            <Heading style={{ textAlign: "center", color: "#7d6c3a" }}>
              Order Update for #{orderId}, {userData?.firstname}!
            </Heading>
            <Section>
              <Text>
                Your order <strong>#{orderId}</strong> is now <strong>{orderStatus}</strong>.
              </Text>
  
              {orderStatus === "Out for Delivery" && (
                <Text>
                  Your order is on its way! Expected delivery date:{" "}
                  <strong>{expectedDeliveryDate}</strong>.
                </Text>
              )}
  
              <Section>
                <Heading style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Order Summary
                </Heading>
                <Hr />
                {cartItems?.map((item) => (
                  <div key={item.id} style={{ marginBottom: "10px" }}>
                    <Text>
                      <strong>Item:</strong> {item.category} ({item.weight} {item.type})
                    </Text>
                    <Text>
                      <strong>Quantity:</strong> {item.quantity}
                    </Text>
                    <Text>
                      <strong>Total Cost:</strong> ${item.totalCost}
                    </Text>
                  </div>
                ))}
              </Section>
  
              <Section style={{ marginTop: "20px" }}>
                <Heading style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Delivery Information
                </Heading>
                <Hr />
                <Text>
                  <strong>Delivery Method:</strong>{" "}
                  {activeTab === "delivery" ? "Home Delivery" : "Pickup"}
                </Text>
                {activeTab === "delivery" && (
                  <Text>
                    <strong>Address:</strong> {userData?.defaultAddress}
                  </Text>
                )}
              </Section>
  
              <Section style={{ marginTop: "20px" }}>
                <Text>
                  If you have any questions or need further assistance, please{" "}
                  <Link href="mailto:support@freshbake.com">contact us</Link>.
                </Text>
              </Section>
  
              <Section style={styles.footer}>
                <Text style={styles.footerText}>
                  © {new Date().getFullYear()} FreshBake. All rights reserved.
                </Text>
                <Text style={styles.footerText}>
                  FreshBake Inc., 123 Bakery Street, Sweet City, Yumland.
                </Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  };
  
  const styles = {
    subheading: {
      fontSize: "18px",
      color: "#333333",
      marginBottom: "10px",
    },
    text: {
      fontSize: "16px",
      color: "#555555",
      lineHeight: "1.5",
    },
    section: {
      marginBottom: "20px",
    },
    footer: {
      borderTop: "1px solid #eaeaea",
      paddingTop: "10px",
      textAlign: "center" as const,
    },
    footerText: {
      fontSize: "12px",
      color: "#999999",
      marginBottom: "5px",
    },
  };
  