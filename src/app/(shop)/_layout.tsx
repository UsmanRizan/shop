import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={24} style={{ color: "#000" }} {...props} />;
}

const TabsLayout = () => {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "blue",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
          },
          tabBarStyle: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: "#51ff00",
            borderTopColor: "white",
            borderTopWidth: 1,
            paddingTop: 10,
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "SHOP",
            tabBarIcon: (props) => (
              <TabBarIcon name="shopping-cart" {...props} />
            ),
          }}
        />
        <Tabs.Screen
          name="orders"
          options={{
            title: "ORDERS",
            tabBarIcon: (props) => <TabBarIcon name="book" {...props} />,
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
