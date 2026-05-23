// sidebars.js

module.exports = {
  docs: [
    // Home / Landing page
    {
      type: 'doc',
      id: 'index',
      label: '🏠 Overview',
    },

    // Getting Started Category
    {
      type: 'category',
      label: '🚀 Getting Started',
      collapsible: true,
      collapsed: false,
      items: [
        'getting-started/local-development',
        'getting-started/docker-setup',
        'getting-started/environment-variables',
        'getting-started/database-seeding',
      ],
    },

    // API Reference Category
    {
      type: 'category',
      label: '📡 API Reference',
      collapsible: true,
      collapsed: false,
      items: [
        'api/authentication',
        'api/rate-limiting',
        'api/error-codes',
        {
          type: 'category',
          label: '📦 Modules',
          collapsible: true,
          collapsed: true,
          items: [
            'api/modules/auth',
            'api/modules/users',
            'api/modules/products',
            'api/modules/cart',
            'api/modules/orders',
            'api/modules/returns',
            'api/modules/interactions',
            'api/modules/coupons',
            'api/modules/wishlist',
            'api/modules/search',
            'api/modules/dashboard',
            'api/modules/support',
            'api/modules/notifications',
            'api/modules/health',
          ],
        },
        {
          type: 'category',
          label: '🧪 Testing (Runbooks)',
          collapsible: true,
          collapsed: true,
          items: [
            'api/thunder-tests/auth-runbook',
            'api/thunder-tests/user-runbook',
            'api/thunder-tests/product-runbook',
            'api/thunder-tests/cart-runbook',
            'api/thunder-tests/order-runbook',
            'api/thunder-tests/return-runbook',
            'api/thunder-tests/interaction-runbook',
            'api/thunder-tests/coupon-runbook',
            'api/thunder-tests/wishlist-runbook',
            'api/thunder-tests/search-runbook',
            'api/thunder-tests/dashboard-runbook',
            'api/thunder-tests/support-runbook',
          ],
        },
      ],
    },

    // Architecture Category
    {
      type: 'category',
      label: '🏗️ Architecture',
      collapsible: true,
      collapsed: true,
      items: [
        'architecture/system-overview',
        'architecture/auth-architecture',
        'architecture/database-design',
        'architecture/product-catalog',
        'architecture/security-hardening',
        'architecture/middleware-and-validation',
        'architecture/payment-integration',
        'architecture/legal-tax-compliance',
        'architecture/edge-cache',
        'architecture/background-jobs-and-cron',
        'architecture/logistics-and-shipping',
        'architecture/media-and-storage',
        'architecture/devops-and-infrastructure',
      ],
    },

    // Deployment Category
    {
      type: 'category',
      label: '☁️ Deployment',
      collapsible: true,
      collapsed: true,
      items: [
        'deployment/production-checklist',
        'deployment/docker-compose',
        'deployment/ci-cd',
      ],
    },

    // Module Deep Dives Category
    {
      type: 'category',
      label: '🧩 Module Deep Dives',
      collapsible: true,
      collapsed: true,
      items: [
        'modules/auth-module',
        'modules/user-module',
        'modules/product-module',
        'modules/cart-module',
        'modules/order-module',
        'modules/return-module',
        'modules/interaction-module',
        'modules/coupon-module',
        'modules/wishlist-module',
        'modules/search-module',
        'modules/dashboard-module',
        'modules/support-module',
        'modules/notification-module',
        'modules/health-module',
      ],
    },

    // Glossary
    {
      type: 'doc',
      id: 'glossary',
      label: '📖 Glossary',
    },
  ],
};