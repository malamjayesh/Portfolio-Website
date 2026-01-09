// Responsive utility classes and patterns for consistent design
export const responsiveClasses = {
  // Container patterns
  container: "container mx-auto px-4 sm:px-6",
  
  // Spacing patterns
  sectionPadding: "py-12 sm:py-16 md:py-20",
  cardPadding: "p-4 sm:p-6 md:p-8",
  smallPadding: "p-4 sm:p-5 md:p-6",
  
  // Typography patterns
  heroTitle: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold",
  sectionTitle: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold",
  cardTitle: "text-lg sm:text-xl font-semibold",
  bodyText: "text-sm sm:text-base",
  smallText: "text-xs sm:text-sm",
  
  // Grid patterns
  grid2: "grid grid-cols-1 sm:grid-cols-2",
  grid3: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  grid4: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  
  // Gap patterns
  gapSmall: "gap-4 sm:gap-6",
  gapMedium: "gap-4 sm:gap-6 md:gap-8",
  gapLarge: "gap-6 sm:gap-8 md:gap-10 lg:gap-12",
  
  // Margin patterns
  marginBottom: "mb-8 sm:mb-12 md:mb-16",
  marginBottomSmall: "mb-4 sm:mb-6",
  marginBottomLarge: "mb-10 sm:mb-12 md:mb-16",
  
  // Border radius patterns
  rounded: "rounded-xl sm:rounded-2xl",
  roundedSmall: "rounded-lg sm:rounded-xl",
  
  // Button patterns
  buttonFull: "w-full sm:w-auto",
  buttonSize: "px-6 sm:px-8 py-4 sm:py-6",
  
  // Icon patterns
  iconSmall: "w-4 h-4 sm:w-5 sm:h-5",
  iconMedium: "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8",
  iconLarge: "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12",
  
  // Flex patterns
  flexCol: "flex flex-col sm:flex-row",
  flexGap: "gap-3 sm:gap-4",
  
  // Hero patterns
  heroHeight: "min-h-[50vh] sm:min-h-[60vh]",
  heroPadding: "pt-24 sm:pt-32 pb-16 sm:pb-20",
  
  // Card patterns
  card: "bg-card border border-border rounded-xl sm:rounded-2xl hover:shadow-card transition-all duration-300",
  
  // Image patterns
  imageHeight: "h-40 sm:h-44 md:h-48",
  avatarSize: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16",
};

// Responsive breakpoint utilities
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

// Helper function to get responsive text size
export const getResponsiveTextSize = (size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl') => {
  const sizes = {
    xs: "text-xs sm:text-sm",
    sm: "text-sm sm:text-base",
    base: "text-base sm:text-lg",
    lg: "text-lg sm:text-xl",
    xl: "text-xl sm:text-2xl",
    "2xl": "text-2xl sm:text-3xl md:text-4xl",
    "3xl": "text-3xl sm:text-4xl md:text-5xl",
    "4xl": "text-4xl sm:text-5xl md:text-6xl",
  };
  return sizes[size];
};

// Helper function to get responsive spacing
export const getResponsiveSpacing = (type: 'padding' | 'margin', size: 'sm' | 'md' | 'lg') => {
  const prefix = type === 'padding' ? 'p' : 'm';
  const sizes = {
    sm: `${prefix}-4 sm:${prefix}-6`,
    md: `${prefix}-6 sm:${prefix}-8 md:${prefix}-10`,
    lg: `${prefix}-8 sm:${prefix}-12 md:${prefix}-16`,
  };
  return sizes[size];
};

// Helper function to get responsive grid
export const getResponsiveGrid = (cols: 2 | 3 | 4) => {
  const grids = {
    2: "grid grid-cols-1 sm:grid-cols-2",
    3: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };
  return grids[cols];
};