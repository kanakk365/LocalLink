import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Order {
  id: string;
  userId: string;
  userName: string;
  pickupLocation: string;
  deliveryLocation: string;
  itemDescription: string;
  status: "pending" | "accepted" | "completed" | "cancelled";
  createdAt: string;
}

export interface Route {
  id: string;
  userId: string;
  userName: string;
  startLocation: string;
  endLocation: string;
  date: string;
  time: string;
  status: "active" | "completed" | "cancelled";
  orders: Order[];
}

interface RouteState {
  routes: Route[];
  userRoutes: Route[];
  availableRoutes: Route[];
  loading: boolean;
  error: string | null;
}

const initialState: RouteState = {
  routes: [],
  userRoutes: [],
  availableRoutes: [],
  loading: false,
  error: null,
};

const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    addRoute: (state, action: PayloadAction<Omit<Route, "orders">>) => {
      // In a real app, you would generate an ID on the backend
      const newRoute = {
        ...action.payload,
        orders: [],
      };
      state.routes.push(newRoute);
      state.userRoutes.push(newRoute);
    },
    deleteRoute: (state, action: PayloadAction<string>) => {
      state.routes = state.routes.filter((route) => route.id !== action.payload);
      state.userRoutes = state.userRoutes.filter((route) => route.id !== action.payload);
    },
    updateRouteStatus: (state, action: PayloadAction<{ routeId: string; status: Route["status"] }>) => {
      const route = state.routes.find((r) => r.id === action.payload.routeId);
      if (route) {
        route.status = action.payload.status;
      }
    },
    addOrderToRoute: (state, action: PayloadAction<{ routeId: string; order: Order }>) => {
      const route = state.routes.find((r) => r.id === action.payload.routeId);
      if (route) {
        route.orders.push(action.payload.order);
      }
    },
    updateOrderStatus: (
      state,
      action: PayloadAction<{ routeId: string; orderId: string; status: Order["status"] }>
    ) => {
      const route = state.routes.find((r) => r.id === action.payload.routeId);
      if (route) {
        const order = route.orders.find((o) => o.id === action.payload.orderId);
        if (order) {
          order.status = action.payload.status;
        }
      }
    },
    setUserRoutes: (state, action: PayloadAction<Route[]>) => {
      state.userRoutes = action.payload;
    },
    setAvailableRoutes: (state, action: PayloadAction<Route[]>) => {
      state.availableRoutes = action.payload;
    },
  },
});

export const {
  addRoute,
  deleteRoute,
  updateRouteStatus,
  addOrderToRoute,
  updateOrderStatus,
  setUserRoutes,
  setAvailableRoutes,
} = routeSlice.actions;

export default routeSlice.reducer;
