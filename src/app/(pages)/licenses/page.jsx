'use client';

import React from 'react';
import { Shield, CheckCircle, FileText, Building, Calendar, Award } from 'lucide-react';


const LicensesPage = () => {
    const licenses = [
        {
            id: 1,
            type: "GST REGISTRATION",
            number: "09AAEFZO930E1ZA", 
            status: "Active",
            issueDate: "02-10-2025",
            authority: "Goods and Services Tax Network",
            description: "Authorized to collect and remit Goods and Services Tax in India",
            icon: Building,
            color: "from-emerald-500 to-teal-600"
        },
        {
            id: 2,
            type: "LLP PIN",
            number: "ACP-5349", 
            status: "Active",
            issueDate: "30-06-2025",
            authority: "LLP Identification Number",
            icon: Building,
            color: "from-emerald-500 to-teal-600"
        },
        {
        id: 3,
            type: "PAN",
            number: "AAEFZ0930E", 
            status: "Active",
            issueDate: "30-06-2025",
            authority: "e - Permanent Account Number",
            icon: Building,
            color: "from-emerald-500 to-teal-600"
        },
        {
        id: 4,
            type: "UDYAM CERTIFICATION",
            number: "UDYAM-UP-59-0086331", 
            status: "Active",
            issueDate: "12-10-2025",
            authority: "UDYAM REGISTRATION CERTIFICATION",
            icon: Building,
            color: "from-emerald-500 to-teal-600"
        },

    ];

    const StatusBadge = ({ status }) => (
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${status === 'Soon will update'
                ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                : 'bg-slate-100 text-slate-600 border border-slate-200'
            }`}>
            <CheckCircle className="w-3 h-3 mr-1" />
            {status}
        </div>
    );

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50 text-slate-900 lg:py-24 py-10">


            {/* Header Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-blue-100/50 to-purple-100/50" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center mt-4">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-r from-blue-500 to-purple-600 rounded-2xl mb-6">
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif bg-linear-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
                            Licenses & Certifications
                        </h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Our commitment to compliance and regulatory standards ensures trust and reliability in all our services.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Current Licenses Grid */}
                <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 mb-16">
                    {licenses.map((license) => {
                        const IconComponent = license.icon;
                        return (
                            <div
                                key={license.id}
                                className="group relative bg-white backdrop-blur-sm border border-slate-200 rounded-2xl p-8 hover:bg-slate-50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
                            >
                                <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                                    <div className="flex items-center space-x-4">
                                        <div className={`p-3 rounded-xl bg-linear-to-r ${license.color}`}>
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-slate-900 mb-1">{license.type}</h3>
                                            <p className="text-slate-600 text-sm">{license.authority}</p>
                                        </div>
                                    </div>
                                    <StatusBadge status={license.status} />
                                </div>

                                <div className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                                            <div className="flex items-center mb-2">
                                                <FileText className="w-4 h-4 text-blue-600 mr-2" />
                                                <span className="text-sm font-medium text-slate-700">License Number</span>
                                            </div>
                                            <p className="text-slate-900 font-mono">{license.number}</p>
                                        </div>

                                        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                                            <div className="flex items-center mb-2">
                                                <Calendar className="w-4 h-4 text-green-600 mr-2" />
                                                <span className="text-sm font-medium text-slate-700">Issue Date</span>
                                            </div>
                                            <p className="text-slate-900">{new Date(license.issueDate).toLocaleDateString()}</p>
                                        </div>
                                    </div>

                                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                                        <div className="flex items-center mb-2">
                                            <Award className="w-4 h-4 text-purple-600 mr-2" />
                                            <span className="text-sm font-medium text-slate-700">Validity</span>
                                        </div>
                                        <p className="text-slate-900">{license.expiryDate}</p>
                                    </div>

                                    <div className="pt-2">
                                        <p className="text-slate-600 text-sm leading-relaxed">{license.description}</p>
                                    </div>
                                </div>

                                {/* Hover effect linear border */}
                                <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                            </div>
                        );
                    })}
                </div>
            </div>


        </div>
    );
};

export default LicensesPage;
