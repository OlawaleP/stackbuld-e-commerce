import { CartContainer } from "@/components/organisms/CartContainer";
import { MainLayout } from "@/components/templates/MainLayout";

export default function CartPage() {
  return (
    <MainLayout title="Shopping Cart" description="View and manage your shopping cart">
      <CartContainer />
    </MainLayout>
  );
}