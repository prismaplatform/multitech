"use client";
import React, { useState, useMemo } from "react";
import { Search, Calendar, MapPin, ChevronUp, ChevronDown } from "lucide-react";

interface Event {
  id: number;
  denumire: string;
  descriere: string;
  locatie: string;
  data: string;
}

interface SortConfig {
  key: keyof Event | null;
  direction: "asc" | "desc";
}

interface SortIconProps {
  column: keyof Event;
}

const MultitechEventsTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: "asc",
  });

  const eventsData: Event[] = [
    {
      id: 1,
      denumire: "Industry Expo & B2B Meetings 2024",
      descriere:
        "Prezentare soluții de automatizare de la Universal Robots, MiR, sisteme de marcare Videojet și FOBA.",
      locatie: "Arad",
      data: "31 Oct. 2024",
    },
    {
      id: 2,
      denumire: "Multitech Experience 2024 – București",
      descriere:
        "Prezentare soluții de automatizare de la Universal Robots, MiR",
      locatie: "București",
      data: "4 Iun. 2024",
    },
    {
      id: 3,
      denumire: "Technology Expo & B2B Meetings 2024",
      descriere:
        "Prezentare soluții de automatizare de la Universal Robots, MiR, sisteme de marcare și etichetare Videojet",
      locatie: "Timișoara",
      data: "30 Mai 2024",
    },
    {
      id: 4,
      denumire: "Identicom4",
      descriere:
        "Prezentare soluții de automatizare de la Universal Robots, MiR, sisteme de marcare și etichetare Videojet",
      locatie: "Cluj-Napoca",
      data: "21-23 Mai 2024",
    },
    {
      id: 5,
      denumire: "Automotive Expo & B2B Meetings 2024",
      descriere:
        "Prezentare soluții de automatizare de la Universal Robots, MiR, sisteme de marcare și etichetare Videojet",
      locatie: "Sibiu",
      data: "28 Mar. 2024",
    },
    {
      id: 6,
      denumire: "Multitech Experience 2024 – Timișoara",
      descriere:
        "Prezentare soluții de automatizare de la Universal Robots, MiR",
      locatie: "Timișoara",
      data: "21 Feb. 2024",
    },
    {
      id: 7,
      denumire: "Multitech Experience 2023 – Iași",
      descriere:
        "Prezentare soluții de automatizare de la Universal Robots, MiR",
      locatie: "Iași",
      data: "8 Noi. 2023",
    },
    {
      id: 8,
      denumire: "Multitech Experience 2023 – Craiova",
      descriere:
        "Prezentare soluții de automatizare de la Universal Robots, MiR",
      locatie: "Craiova",
      data: "15 Noi. 2023",
    },
    {
      id: 9,
      denumire: "Industry Expo & B2B Meetings",
      descriere:
        "Prezentare soluții de automatizare de la Universal Robots, MiR, sisteme de marcare și etichetare Videojet",
      locatie: "Arad",
      data: "26 Oct. 2023",
    },
    {
      id: 10,
      denumire: "Technology Expo & B2B Meetings",
      descriere:
        "Prezentare soluții de automatizare de la Universal Robots, MiR, sisteme de marcare și etichetare Videojet",
      locatie: "Sibiu",
      data: "3-4 Mai 2023",
    },
    {
      id: 11,
      denumire: "Intek",
      descriere:
        "Prezentare soluții de automatizare de la Universal Robots, MiR, sisteme de marcare și etichetare Videojet",
      locatie: "Brașov",
      data: "4-7 Apr. 2023",
    },
    {
      id: 12,
      denumire: "Automotive Expo & B2B Meetings",
      descriere:
        "Prezentare soluții de automatizare de la Universal Robots, MiR, sisteme de marcare și etichetare Videojet",
      locatie: "Sibiu",
      data: "30 Mar. 2023",
    },
    {
      id: 13,
      denumire: "GoTech World",
      descriere:
        "Robotul Universal Robots dansează cu Dr. Merritt Moore, fizician și balerină profesionistă.",
      locatie: "București",
      data: "3-4 Noi. 2022",
    },
    {
      id: 14,
      denumire: "Industry Expo",
      descriere:
        "Prezentare soluții de automatizare de la Universal Robots, MiR, sisteme de marcare și etichetare Videojet",
      locatie: "Arad",
      data: "27 Oct. 2022",
    },
    {
      id: 15,
      denumire: "Multitech Experience 2022 – București",
      descriere:
        "Prezentare soluții de automatizare de la Universal Robots, MiR, OnRobot",
      locatie: "București",
      data: "11 Oct. 2022",
    },
  ];

  const filteredEvents = useMemo<Event[]>(() => {
    return eventsData.filter(
      (event: Event) =>
        event.denumire.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.descriere.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.locatie.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const sortedEvents = useMemo<Event[]>(() => {
    if (!sortConfig.key) return filteredEvents;

    return [...filteredEvents].sort((a: Event, b: Event) => {
      const aValue = a[sortConfig.key!];
      const bValue = b[sortConfig.key!];

      if (aValue < bValue) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  }, [filteredEvents, sortConfig]);

  const handleSort = (key: keyof Event): void => {
    setSortConfig((prevConfig) => ({
      key,
      direction:
        prevConfig.key === key && prevConfig.direction === "asc"
          ? "desc"
          : "asc",
    }));
  };

  const SortIcon: React.FC<SortIconProps> = ({ column }) => {
    if (sortConfig.key !== column)
      return <ChevronUp className="w-4 h-4 text-gray-400" />;
    return sortConfig.direction === "asc" ? (
      <ChevronUp className="w-4 h-4 text-blue-600" />
    ) : (
      <ChevronDown className="w-4 h-4 text-blue-600" />
    );
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="multitech-section-padding2 position-relative overflow-hidden">

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div
              className="multitech-default-content pr-50"
              data-aos="fade-right"
              data-aos-duration="700"
            >
              <h2>Evenimente Multitech</h2>
              <p className="data">Explorați istoricul evenimentelor noastre</p>
          
            </div>
          </div>
          <div className="col-md-6 mt-3 mt-md-0">
            <div className="position-relative">
              <Search
                className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
                size={18}
              />
              <input
                type="text"
                className="form-control search-input"
                placeholder="Căutați evenimente..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>
        <div className="table-container mt-50">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th onClick={() => handleSort("denumire")}>
                    <div className="d-flex align-items-center justify-content-between">
                      <span>Eveniment</span>
                      <SortIcon column="denumire" />
                    </div>
                  </th>
                  <th className="d-none d-md-table-cell">Descriere</th>
                  <th onClick={() => handleSort("locatie")}>
                    <div className="d-flex align-items-center justify-content-between">
                      <span>Locație</span>
                      <SortIcon column="locatie" />
                    </div>
                  </th>
                  <th onClick={() => handleSort("data")}>
                    <div className="d-flex align-items-center justify-content-between">
                      <span>Data</span>
                      <SortIcon column="data" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedEvents.map((event: Event) => (
                  <tr key={event.id}>
                    <td>
                      <div className="event-name">{event.denumire}</div>
                      <div className="d-md-none mt-2 event-description">
                        {event.descriere}
                      </div>
                    </td>
                    <td className="d-none d-md-table-cell">
                      <div className="event-description">{event.descriere}</div>
                    </td>
                    <td>
                      <div className="location-date">
                        <MapPin size={16} />
                        <span>{event.locatie}</span>
                      </div>
                    </td>
                    <td>
                      <div className="location-date">
                        <Calendar size={16} />
                        <span>{event.data}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultitechEventsTable;